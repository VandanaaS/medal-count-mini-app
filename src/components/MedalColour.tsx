export default function MedalIcon({ type }: { type: string }) {
  const fill = {
    gold: '#FFD700',
    silver: '#C0C0C0',
    bronze: '#CD7F32',
    total: '#6c757d',
  }[type];

  return type === 'total' ? (
    <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
      <circle cx="50" cy="50" r="40" fill={fill} />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
      <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill={fill} />
    </svg>
  );
}
