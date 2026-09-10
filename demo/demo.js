const scenarios = {

    normal: {
        load: "Stable",
        loadSub: "Normal site demand",

        grid: "AVAILABLE",
        gridSub: "Grid-connected operation",

        soc: "Within range",
        socSub: "Operating reserve available",

        generation: "AVAILABLE",
        generationSub: "Expected generation condition",

        regime: "NORMAL / GRID-CONNECTED",

        decision: "HOLD",

        decisionDescription:
            "Maintain the current operating state while preserving reserve and service conditions.",

        reserve: "MAINTAINED",
        reserveSub: "Reserve discipline active",

        service: "PRESERVED",
        serviceSub: "Service continuity considered",

        safety: "ACTIVE",
        safetySub: "Supervisory constraints remain active",

        reason:
            "The current operating conditions support a normal grid-connected supervisory state."
    },


    peak: {
        load: "High",
        loadSub: "Site demand materially increased",

        grid: "AVAILABLE",
        gridSub: "Grid remains available",

        soc: "Within range",
        socSub: "Sufficient flexibility available",

        generation: "AVAILABLE",
        generationSub: "Generation condition unchanged",

        regime: "PEAK MANAGEMENT",

        decision: "DISCHARGE / PEAK SUPPORT",

        decisionDescription:
            "Use available battery flexibility to reduce site peak while preserving the defined reserve condition.",

        reserve: "MAINTAINED",
        reserveSub: "Reserve requirement remains active",

        service: "PRESERVED",
        serviceSub: "Site service continuity maintained",

        safety: "ACTIVE",
        safetySub: "Supervisory safety gates remain active",

        reason:
            "Site demand has increased, so the supervisory strategy shifts toward peak support rather than maintaining the normal state."
    },


    low_soc: {
        load: "Moderate",
        loadSub: "No exceptional site peak",

        grid: "AVAILABLE",
        gridSub: "Grid-connected operation",

        soc: "LOW",
        socSub: "Reserve condition becoming dominant",

        generation: "AVAILABLE",
        generationSub: "Generation condition unchanged",

        regime: "RESERVE PROTECTION",

        decision: "HOLD / LIMITED CHARGE",

        decisionDescription:
            "Protect battery reserve instead of prioritizing immediate economic discharge.",

        reserve: "PROTECTED",
        reserveSub: "Reserve discipline takes priority",

        service: "PRESERVED",
        serviceSub: "Service continuity remains considered",

        safety: "ACTIVE",
        safetySub: "Supervisory constraints remain active",

        reason:
            "Battery state of charge has moved toward a constrained region, so reserve preservation becomes the dominant supervisory consideration."
    },


    outage: {
        load: "Critical",
        loadSub: "Service continuity becomes dominant",

        grid: "UNAVAILABLE",
        gridSub: "Outage / island condition",

        soc: "Protected",
        socSub: "Available reserve treated as critical",

        generation: "AVAILABLE",
        generationSub: "Local generation available",

        regime: "OUTAGE / ISLAND",

        decision: "SERVICE CONTINUITY MODE",

        decisionDescription:
            "Adapt supervisory behavior to preserve critical service under changed grid conditions.",

        reserve: "PROTECTED",
        reserveSub: "Available reserve treated as strategic resource",

        service: "CRITICAL SERVICE PRESERVED",
        serviceSub: "Continuity becomes a primary constraint",

        safety: "ACTIVE",
        safetySub: "Lower-level protection remains authoritative",

        reason:
            "Grid availability has changed materially, so supervisory behavior shifts from normal optimization toward service continuity."
    },


    recovery: {
        load: "Moderate",
        loadSub: "Site demand stabilizing",

        grid: "RESTORED",
        gridSub: "Grid availability returning",

        soc: "Recovering",
        socSub: "Reserve restoration underway",

        generation: "AVAILABLE",
        generationSub: "Generation condition stable",

        regime: "POST-OUTAGE RECOVERY",

        decision: "RECOVER RESERVE",

        decisionDescription:
            "Transition from abnormal operation toward restoration of the desired reserve state.",

        reserve: "RECOVERING",
        reserveSub: "Reserve restoration prioritized",

        service: "PRESERVED",
        serviceSub: "Service continuity remains considered",

        safety: "ACTIVE",
        safetySub: "Supervisory constraints remain active",

        reason:
            "Grid conditions have returned, so the supervisory strategy transitions from continuity protection toward controlled reserve recovery."
    },


    generation_loss: {
        load: "Moderate",
        loadSub: "Site demand unchanged",

        grid: "AVAILABLE",
        gridSub: "Grid remains available",

        soc: "Within range",
        socSub: "Battery flexibility available",

        generation: "REDUCED",
        generationSub: "On-site generation materially reduced",

        regime: "GENERATION LOSS",

        decision: "ADAPTIVE SUPPORT",

        decisionDescription:
            "Adjust supervisory battery behavior to compensate for the changed supply condition.",

        reserve: "CONTROLLED",
        reserveSub: "Reserve remains actively managed",

        service: "PRESERVED",
        serviceSub: "Service continuity considered",

        safety: "ACTIVE",
        safetySub: "Supervisory constraints remain active",

        reason:
            "Available generation has changed, so the supervisory decision adapts to the new supply context while maintaining reserve discipline."
    }

};


function setText(id, value) {
    document.getElementById(id).textContent = value;
}


function renderScenario(name) {

    const s = scenarios[name];

    if (!s) return;

    setText("loadValue", s.load);
    setText("loadSub", s.loadSub);

    setText("gridValue", s.grid);
    setText("gridSub", s.gridSub);

    setText("socValue", s.soc);
    setText("socSub", s.socSub);

    setText("generationValue", s.generation);
    setText("generationSub", s.generationSub);

    setText("regimeValue", s.regime);

    setText("decisionValue", s.decision);
    setText("decisionDescription", s.decisionDescription);

    setText("reserveValue", s.reserve);
    setText("reserveSub", s.reserveSub);

    setText("serviceValue", s.service);
    setText("serviceSub", s.serviceSub);

    setText("safetyValue", s.safety);
    setText("safetySub", s.safetySub);

    setText("reasonText", s.reason);

    document.querySelectorAll(".scenario-btn")
        .forEach(button => {

            button.classList.remove("active");

            if (button.dataset.scenario === name) {
                button.classList.add("active");
            }

        });
}


document.querySelectorAll(".scenario-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            renderScenario(button.dataset.scenario);

        });

    });


renderScenario("normal");
