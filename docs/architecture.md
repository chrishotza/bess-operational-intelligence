# Architecture

## Supervisory control boundary

BESS Operational Intelligence is positioned as a supervisory
decision layer between system-level operating conditions and
lower-level battery control and protection functions.

```text
+-----------------------------+
| Operating Conditions        |
|                             |
| Load / Grid / SOC / Reserve |
| Generation / Events         |
+-------------+---------------+
              |
              v
+-----------------------------+
| Supervisory Decision        |
| Intelligence                |
+-------------+---------------+
              |
              v
+-----------------------------+
| High-Level BESS Action      |
+-------------+---------------+
              |
              v
+-----------------------------+
| PCS / Inverter / BMS        |
| Lower-Level Control         |
| Protection                  |
+-----------------------------+
```

## Supervisory role

The supervisory layer interprets changing operating context and
selects an appropriate high-level operating behavior.

Representative decisions include:

- hold
- charge
- discharge
- peak support
- reserve recovery
- operating-mode transition

The supervisory decision is evaluated together with operational
constraints related to reserve, service continuity and system state.

## Operating regimes

The architecture is designed to respond to changes such as:

- normal grid-connected operation
- peak demand
- constrained battery reserve
- outage / island operation
- post-outage recovery
- generation loss

The objective is not simply to optimize an isolated variable.
The supervisory strategy changes as the operating regime changes.

## Lower-level boundary

Fast physical control and protection remain below the supervisory
layer.

This includes functions such as:

- inverter current control
- PWM switching
- hard protection
- fast fault clearing
- lower-level BMS functions

This separation allows the supervisory layer to focus on operational
decision intelligence while lower-level systems remain responsible
for physical control and protection.

## Integration concept

The supervisory layer is intended to fit into partner-specific BESS
architectures.

The exact implementation and hardware interface depend on the
target system and validation environment.

## Engineering principle

The architecture separates:

**Operational intelligence**

from

**Fast physical control and protection.**

That boundary is central to the technology's intended role in BESS.
