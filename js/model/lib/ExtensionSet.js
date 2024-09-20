
Set.prototype.equals = function(set) {
    return this.size === set.size && [...this].every(val => set.has(val));
}

Set.prototype.issubsetof = function (set) {
    return [...this].every(val => set.has(val));
}

Set.prototype.clearDoublonofSet = function () {
    for (let index = 0; index < this.size; index++) {
            const ensemble = [...this][index];
            for (let index2 = index + 1; index2 < this.size; index2++) {
                    const ensemble2 = [...this][index2];
                    if (index != index2 && ensemble.equals(ensemble2)) {
                            this.delete(ensemble2)
                    }
            }
    }
    return this
}