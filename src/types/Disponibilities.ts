type Disponibilities = {
  disponibility: Disponibility;
  id: number;
  id_professional: number;
};

type Disponibility = {
  id_professional: number;
  slots: Slot;
};

type Slot = {
  monday: Array<String>;
  tuesday: Array<String>;
  wednesday: Array<String>;
  thursday: Array<String>;
  friday: Array<String>;
  saturday: Array<String>;
  sunday: Array<String>;
};

export default Disponibilities;
