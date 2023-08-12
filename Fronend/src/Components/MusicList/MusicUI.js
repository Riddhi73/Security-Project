import React from "react";
import MusicCard from "./MusicCard";
import "./CardStyle.css";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const songs = [
  {
    id: 1,
    item: 1,
  },
  {
    id: 2,
    item: 2,
  },
  {
    id: 3,
    item: 3,
  },
  {
    id: 4,
    item: 4,
  },
  {
    id: 5,
    item: 5,
  },
  {
    id: 6,
    item: 6,
  },
  {
    id: 7,
    item: 7,
  },
  {
    id: 8,
    item: 8,
  },
  {
    id: 8,
    item: 8,
  },
  {
    id: 9,
    item: 9,
  },
  {
    id: 10,
    item: 10,
  },
  {
    id: 11,
    item: 11,
  },
  {
    id: 12,
    item: 12,
  },
];

export default function MusicUI() {
  return (
    <div className="cardBg py-5">
      <div className="container">
      <div className=" mx-auto text-light p-4 mt-5">
            <h2 className="fw-light text-light">Your Mode is  Detected : Happy <SentimentSatisfiedAltIcon className="fs-1"/></h2>
            <h4 className="text-primary">Total Songs : 50 </h4>
            </div>
        <h4 className="text-light text-start conatiner py-4 fw-light">
          Recommended Music :
        </h4>

        <div className="d-flex w-100 ">
          <div className="d-flex row gap-4 mx-auto">
            {songs.map((props) => (
              <MusicCard></MusicCard>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}
