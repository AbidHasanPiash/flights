// A custom tab button component
export default function TabButton({ tab, onPress, isActive }) {
  // Determine button and icon color based on the isActive prop
  const buttonClass = isActive ? 'bg-primary' : 'bg-primary-light';
  const iconClass = isActive ? 'text-night' : 'text-white';

  return (
    // Button element with an onClick event handler
    <button onClick={onPress}>
      {/* Container for tab button content */}
      <span className={`px-4 py-2 rounded-t-md text-sm flexCenter space-x-2 ${buttonClass}`}>
        {/* Icon for the tab */}
        <span className={iconClass}>{tab.icon}</span>

        {/* Text for the tab */}
        <span className="text-sm md:text-base">{tab.text}</span>
      </span>
    </button>
  );
}
