export default function TabButton({tab, onPress}) {
  return (
    <button onClick={onPress}>
      <span className='px-4 py-2 rounded-t-md text-sm bg-primary flexCenter space-x-2'>
        {tab.icon}
        <span>{tab.text}</span>
      </span>
    </button>
  )
}
