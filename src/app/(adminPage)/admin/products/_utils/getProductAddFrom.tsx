export default function getProductAddFrom(type: 'add' | 'modify') {
  const obj = {
    add: <></>,
    modify: <></>,
  } as const;
  return obj[type];
}
