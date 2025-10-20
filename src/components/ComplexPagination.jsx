import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleClick = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const addButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handleClick(pageNumber)}
        className={`join-item btn-sm md:btn-md btn ${
          activeClass ? "btn-active" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };
  const renderButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addButton({ pageNumber: 1, activeClass: page === 1 }));
    // before dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn-sm md:btn-md btn" key='dots-1'>...</button>
      );
    }
    // current button
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addButton({ pageNumber: page, activeClass: true }));
    }
    // after dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn-sm md:btn-md btn" key='dots-2'>...</button>
      );
    }
    // last button
    pageButtons.push(
      addButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };
  if (pageCount < 2) return null;

  return (
    <section className="flex justify-end mt-16">
      <div className="join self-end">
        <button
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handleClick(prevPage);
          }}
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
        >
          «
        </button>
        {renderButtons()}
        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handleClick(nextPage);
          }}
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
        >
          »
        </button>
      </div>
    </section>
  );
};

export default ComplexPagination;
