import React, { useRef, useState } from "react";
import "./list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Listitem from "../listitem/Listitem";

function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${260 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      //   if (slideNumber == 4) {
      //     setIsMoved(false);
      //   }
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-260 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <Listitem index={0} />
          <Listitem index={1} />
          <Listitem index={2} />
          <Listitem index={3} />
          <Listitem index={4} />
          <Listitem index={5} />
          <Listitem index={6} />
          <Listitem index={7} />
          <Listitem index={8} />
          <Listitem index={9} />

          {/* <Listitem index={1} />
          <Listitem index={2} />
          <Listitem index={3} />
          <Listitem index={4} />
          <Listitem index={5} />
          <Listitem index={6} />
          <Listitem index={7} />
          <Listitem index={8} />
          <Listitem index={9} />
          <Listitem index={10} /> */}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
