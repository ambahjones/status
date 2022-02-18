const navigation = [
  {
    name: 'Home',
    href: 'https://www.getshifter.io/',
    current: true,
    target: '',
  },
  {
    name: 'Contact',
    href: 'https://www.getshifter.io/',
    current: false,
    target: '',
  },
  {
    name: 'Support',
    href: 'https://support.getshifter.io/',
    current: false,
    target: '',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <footer className="flex h-24 w-full flex-wrap justify-evenly">
      <div className="flex h-2/5 w-full justify-evenly md:w-2/3">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            className={classNames(
              item.current ? 'text-gray-400' : 'text-gray-400 hover:text-black',
              'hover:text-black'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="h-1/2">
        <span>Shifter</span>
      </div>
    </footer>
  )
}
