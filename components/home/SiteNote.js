import React, { useState } from 'react';
import { BiCaretRight, BiCaretDown } from 'react-icons/bi';
import CloseButton from '../ui/CloseButton';

const SiteNote = () => {
  const [showNote, setShowNote] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowNote((prev) => !prev);
  };
  return (
    <aside className={showNote ? 'mb-4' : undefined}>
      <div className="flex flex-row items-center ml-1 xl:ml-16 mb-3 mt-4 md:text-lg">
        {!showNote ? <BiCaretRight /> : <BiCaretDown />}
        <input
          type="button"
          onClick={handleClick}
          value="A note on the content"
          aria-controls="content-note"
          aria-expanded={showNote}
          className="hover:cursor-pointer"
        />
      </div>
      {showNote && (
        <div
          id="content-note"
          className="m-2 xl:my-2 xl:mx-16 pl-3 pr-6 pb-3 bg-slate-50 border rounded-lg">
          <p className="font-light mt-2">
            Much of the content on this site was created in 1976, and the text
            herein often refers to that year. This material was intended to be
            published at that time; it never was. But through the magic of the
            internet, it has been resurrected in the form you see.
          </p>
          <p className="font-light mt-2">
            The great thing about most historic sites, and the plaques that
            commemorate them, is that they don’t change much, if at all, through
            time. Telegraph Hill is still Telegraph Hill, and Union Square is
            still Union Square. So the stuff I wrote in that remote,
            antediluvian time is still for the most part valid today. I have,
            nonetheless, carefully reviewed the text and made changes and
            updates where appropriate.
          </p>
          <p className="font-light mt-2">Enjoy!</p>
          <p className="font-normal mt-2">Douglas Kent</p>
          <CloseButton
            controls="content-note"
            closeClickHandler={handleClick}
          />
        </div>
      )}
    </aside>
  );
};

export default SiteNote;
