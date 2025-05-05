const MobileNavigation = ({
  openMobileNavigation,
  setOpenMobileNavigation,
}: {
  openMobileNavigation: boolean;
  setOpenMobileNavigation: (open: boolean) => void;
}) => {
  return (
    <>
      <div
        className={`fixed w-[100%] h-[100vh] top-0 left-0 bg-gray-900 opacity-75 z-100001 ${
          openMobileNavigation ? "block" : "hidden"
        }`}
        onClick={() => {
          setOpenMobileNavigation(false);
        }}
      ></div>
      <div
        className={`fixed z-100002 left-0 top-0 h-[100%] w-[360px] max-[400px]:w-[85%] max-[320px]:w-[90%] bg-white duration-300 transform transition-transform ease-in-out ${
          openMobileNavigation ? "translate-x-[0]" : "-translate-x-[360px]"
        }`}
      ></div>
    </>
  );
};

export default MobileNavigation;
