const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const directory = path.join(__dirname, '..', 'demo');
const html = fs.readFileSync(path.join(directory, 'demo.html'), 'utf8');
const script = fs.readFileSync(path.join(directory, 'demo.js'), 'utf8');

test('scenario buttons expose a selection state and a static-simulation warning', () => {
  const choices = [...html.matchAll(/data-scenario="([^"]+)" aria-pressed="(true|false)"/g)];
  assert.equal(choices.length, 6);
  assert.equal(choices.filter(([, , pressed]) => pressed === 'true').length, 1);
  assert.match(html, /Static simulated scenarios only/);
  assert.match(html, /id="scenarioAnnouncement"/);
});

test('scenario switching updates text and ARIA status without external dependencies', () => {
  const elements = new Map();
  const choices = ['normal', 'peak', 'low_soc', 'outage', 'recovery', 'generation_loss'];
  const buttons = choices.map(scenario => {
    const listeners = {};
    const attrs = {};
    const classes = new Set();
    return {
      dataset: {scenario}, listeners, attrs, classes,
      classList: {
        toggle(name, selected) { selected ? classes.add(name) : classes.delete(name); },
      },
      setAttribute(name, value) { attrs[name] = value; },
      addEventListener(event, fn) { listeners[event] = fn; },
    };
  });
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, {textContent: ''});
      return elements.get(id);
    },
    querySelectorAll(selector) {
      assert.equal(selector, '.scenario-btn');
      return buttons;
    },
  };
  vm.runInNewContext(script, {document}, {timeout: 1000});
  assert.equal(elements.get('decisionValue').textContent, 'HOLD');
  assert.equal(buttons[0].attrs['aria-pressed'], 'true');
  buttons[3].listeners.click();
  assert.equal(elements.get('decisionValue').textContent, 'SERVICE CONTINUITY MODE');
  assert.equal(buttons[3].attrs['aria-pressed'], 'true');
  assert.equal(buttons[0].attrs['aria-pressed'], 'false');
  assert.match(elements.get('scenarioAnnouncement').textContent, /outage/);
  assert.match(elements.get('scenarioAnnouncement').textContent, /Static simulation only/);
});
