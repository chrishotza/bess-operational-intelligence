# BESS Operational Intelligence

**ConsciousPulse · supervisory energy intelligence**  
**ConsciousPulse · inteligencia supervisora para energía**

This repository is a **public, simulation-backed research demonstration** of supervisory decisions for battery energy storage systems. It is not a deployed controller, a certified protection system, or evidence of completed field/HIL validation.

**ES:** Demostración pública de investigación de ConsciousPulse sobre decisiones supervisoras para baterías, respaldada por simulaciones. No representa un controlador desplegado ni una validación de campo/HIL completada.


Public technical demonstration of supervisory decision intelligence for constrained Battery Energy Storage System (BESS) operation.

## Overview

Battery storage operates across changing load, grid, reserve, generation and event conditions. A useful supervisory layer must adapt its operating strategy as that context changes.

BESS Operational Intelligence presents a supervisory decision layer designed around changing operating regimes, reserve-aware operation, peak management, outage and recovery behavior, service continuity, and operational decision reasoning.

## Concept

Operating Conditions
 -> Supervisory Decision Intelligence
 -> High-Level BESS Action
 -> PCS / Inverter / BMS / Protection

## Technology position

TRL-6 / simulation-grade.

The current technology is prepared for source-free Pre-HIL and subsequent HIL-oriented technical translation.

## Locked replay benchmark

26 scenarios
260 runs
260 / 260 successful
0 SOC violations
0 thermal warnings
0 policy violations

Observed minimum improvements:

Peak improvement: +15.503276%
Adjusted cost improvement: +4.658863%
Raw cost improvement: +4.432046%
Maximum flex usage: approximately 2.500965%

A separate historical validation corpus contains approximately 92,660 validation runs. This is distinct from the final locked replay benchmark.

## Interactive demonstration

[Open the demo](demo/demo.html)

## Technical direction

The project focuses on supervisory decision intelligence for constrained BESS operation and the path from simulation evidence toward external Pre-HIL evaluation and subsequent physical validation.

## Contact

https://consciouspulse.org/
