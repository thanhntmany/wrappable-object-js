function WrappableObject(base) {
    this._base = base
}

WrappableObject.prototype._ = function(key) {
    return key in this ? this[key] : this._base._(key)
}

WrappableObject.prototype._wrap = function (key, wrapperBuilderFn) {
    return this[key] = wrapperBuilderFn(this._(key))
}
