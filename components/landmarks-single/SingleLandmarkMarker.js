import React from 'react';

const SingleLandmarkMarker = ({ markerText, markerOnSite, markerYear }) => {
  const clean = DOMPurify.sanitize(markerText);
  const createMarkerMarkup = () => {
    return { __html: clean };
  };
  return (
    <>
      <h2 className="mb-2 text-lg font-medium">Plaque</h2>
      <h3 className="mt-6 mb-2 font-medium">Inscription</h3>
      <div
        className="mb-4 italic"
        dangerouslySetInnerHTML={createMarkerMarkup()}
      />
      {markerOnSite === 'FALSE' && (
        <div className="mb-4 py-1 px-2 border rounded-lg bg-slate-100">
          <p className="my-2 font-normal text-sm">
            Note: there is presently no state marker on site. Inscription
            provided by the Office of Historic Preservation, CA State Parks.
          </p>
        </div>
      )}
      {markerYear && (
        <>
          <h3 className="mt-6 mb-2 font-medium">Year Dedicated</h3>
          <p className="mb-4 italic">{markerYear}</p>
        </>
      )}
    </>
  );
};

export default SingleLandmarkMarker;
