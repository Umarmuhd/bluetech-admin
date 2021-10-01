//Loading spinner
export default function Loader({ show }) {
  return show ? (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
    </div>
  ) : null;
}
