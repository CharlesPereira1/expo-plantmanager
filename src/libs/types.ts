export interface EnviromentsProps {
  key: string;
  title: string;
}

export interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  dateTimeNotification: Date;
  hour: string;
  frequency: {
    times: number;
    repeat_every: Date;
  };
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantsProps;
  };
}
