interface Robot {
  _id: string;
  name: string;
  image: string;
  features: {
    speed: number;
    endurance: number;
    creationDate: number;
  };
}

export default Robot;
