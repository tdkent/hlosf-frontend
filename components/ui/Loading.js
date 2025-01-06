import { CgSpinner } from 'react-icons/cg';

export default function Loading() {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/25">
      <div className="relative w-fit mx-auto top-1/4">
        <CgSpinner className="animate-spin 1s linear infinite h-10 w-10" />
      </div>
    </div>
  );
}
