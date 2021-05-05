export interface EnviromentsProps {
  key: string;
  title: string;
}
export interface ConfirmationProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
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
    repeat_every: string;
  };
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantsProps;
  };
}
