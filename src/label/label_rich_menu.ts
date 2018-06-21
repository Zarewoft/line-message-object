class LabelRichMenu {
  private _label?: string;

  constructor(label?: string) {
    this._label = label;
  }

  getValue(): string {
    return this._label;
  }
}

export { LabelRichMenu }
