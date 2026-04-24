import "../styles/CompBtnScrollToTop.css";

function CompBtnScrollToTop() {
    return (
        <button className="btn-scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/svgs/arrow-up.svg" alt="Scroll to Top" />
        </button>
    );
}

export default CompBtnScrollToTop;