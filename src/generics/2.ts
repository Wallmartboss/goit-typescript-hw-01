type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<
  T extends Pick<AllType, 'name' | 'color'>,
  K extends Pick<AllType, 'position' | 'weight'> >
  (top: T, bottom: K): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
export { };