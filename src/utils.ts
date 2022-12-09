export function querySelector<T extends Element>(
    parent: Element | Document, selector: string
  ): T {
    const el = parent.querySelector<T>(selector);
    if (!el) {
      throw new Error(`Selector ${selector} didn't match any elements.`);
    }
    return el;
  }