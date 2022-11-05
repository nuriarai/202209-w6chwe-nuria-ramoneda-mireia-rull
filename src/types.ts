interface Robot {
  name: string;
  image: string;
  features: {
    speed: number;
    endurance: number;
    creationDate: number;
  };
}

export default Robot;
