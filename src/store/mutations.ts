export function setCurrentPart(state, part: number) {
    const s = { ...state };
    if (part <= s.parts.maxParts && part >= 1){
        s.parts.currentPart = part;
    }
    return s;
}

export function increaseCurrentPart(state) {
    const s = { ...state };
    if (s.parts.currentPart < s.parts.maxParts){
        s.parts.currentPart++;
    }
    return s;
}

export function decreaseCurrentPart(state) {
    const s = { ...state };
    if (s.parts.currentPart > 1){
        s.parts.currentPart--;
    }
    return s;
}

export function setMaxPart(state, part: number) {
    const s = { ...state };
    if (part >= 1){
        s.parts.maxParts = part;
    }
    return s;
}

export function increaseMaxPart(state) {
    const s = { ...state };
    s.parts.maxParts++;
    return s;
}

export function decreaseMaxPart(state) {
    const s = { ...state };
    if (s.parts.maxParts > 1){
        s.parts.maxParts--;
    }
    return s;
}