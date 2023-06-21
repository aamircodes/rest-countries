const Navbar = () => {
  return (
    <div className='navbar bg-base-200 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Country Explorer</a>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>dark mode</button>
      </div>
    </div>
  );
};

export default Navbar;
