import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

function SubMenu({ items, isOpen }) {
  return (
    <ul className={`sub-menu flex flex-col mb-3 gap-1 xl:mb-0 xl:fixed xl:top-[60px] xl:left-0 xl:w-screen xl:h-1/3 xl:bg-[#293C3D] xl:p-[12%] xl:text-2xl xl:justify-center  ${isOpen ? 'block' : 'hidden'}`}>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <li key={index}>
            <Link to={item.link || '#'} className="block py-2 hover:bg-gray-200 text-white font-medium">
              {item.title || 'Untitled'}
            </Link>
          </li>
        ))
      ) : (
        <li>No items to display</li>
      )}
    </ul>
  );
}


function MenuItem({ title, link, subMenuItems, isOpen, onToggle, linkType }) {
  const handleClick = (e) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <div className='border-b border-t xl:border-none border-[#293C3D] text-white xl:text-[#151E1E]'>
      <li className="menu-item" onClick={handleClick}>
        <Link to={link} className="py-4 font-normal w-full flex justify-between xl:justify-normal xl:mr-14 text-base items-center hover:underline">
          <h3>{title}</h3>
          {linkType === 'sublink' ? (
            <div>
              <img className='w-3 xl:hidden xl:ml-2 xl:pt-1' src={isOpen ? '/minus-solid.svg' : '/plus-solid.svg'} alt="Toggle" />
              <img className='w-3 hidden xl:block xl:ml-2 xl:pt-1 fill-white' src={isOpen ? '/chevron-up-solid.svg' : '/chevron-down-solid.svg'} alt="Toggle" />
            </div>
          ) : (
            <img className='w-3 xl:hidden xl:ml-2 xl:pt-1' src="/arrow-right-solid.svg" alt="Toggle" />
          )}
        </Link>
        {subMenuItems && <SubMenu items={subMenuItems} isOpen={isOpen} />}
      </li>
    </div>
  );
}

function Menu({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === openIndex) {
      // If the same menu item is clicked, close it.
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down (you may need to adjust the threshold)
      if (window.scrollY > 50) {
        setOpenIndex(null); // Close the sub-menu
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className='border-b border-t xl:border-none border-[#293C3D] flex flex-col xl:flex-row xl:items-center '>
      {items && items.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          link={item.link}
          subMenuItems={item.subMenuItems}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
          linkType={item.linkType || 'default'} // Specify link type (default or sublink)
        />
      ))}
    </ul>
  );
}

export default Menu;
