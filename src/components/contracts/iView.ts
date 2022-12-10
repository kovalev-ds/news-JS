export interface iView<T> {
  draw(data: T[]): void;
}