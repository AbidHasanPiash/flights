export default function TabButton({ tab, onPress, isActive }) {
  const buttonClass = isActive ? 'bg-primary' : 'bg-primary-light';
  const iconClass = isActive ? 'text-night' : 'text-white';

  return (
    <button onClick={onPress}>
      <span className={`px-4 py-2 rounded-t-md text-sm flexCenter space-x-2 ${buttonClass}`}>
        <span className={iconClass}>{tab.icon}</span>
        <span>{tab.text}</span>
      </span>
    </button>
  );
}