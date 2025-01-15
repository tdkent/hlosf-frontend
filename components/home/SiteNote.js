const SiteNote = () => {
  return (
    <aside className="pl-2 pr-6 my-8">
      <details>
        <summary>A note on the content</summary>
        <div
          id="content-note"
          className="m-2 xl:my-2 pl-3 pr-6 pb-3 bg-slate-50 border rounded-lg">
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
        </div>
      </details>
    </aside>
  );
};

export default SiteNote;
