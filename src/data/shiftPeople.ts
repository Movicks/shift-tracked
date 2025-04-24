import { ShiftPerson } from "../types/types";

export const shiftPeople: ShiftPerson[] = [
  {
    id: '1',
    minutesLeft: 25,
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    fullName: 'Victor Idepe',
    shiftHostedByName: 'Sophia Tran',
    verifiedStatus: true,
    shiftCompleted: false,
  },
  {
    id: '2',
    minutesLeft: 0,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    fullName: 'Amara Johnson',
    shiftHostedByName: 'Chinedu Eze',
    verifiedStatus: false,
    shiftCompleted: true,
  },
  {
    id: '3',
    minutesLeft: 15,
    image: '',
    fullName: 'Tunde Ayoola',
    shiftHostedByName: 'Victor Idepe',
    verifiedStatus: false,
    shiftCompleted: false,
  },
  {
    id: '4',
    minutesLeft: 40,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    fullName: 'Ngozi Mbanefo',
    shiftHostedByName: 'Amara Johnson',
    verifiedStatus: true,
    shiftCompleted: false,
  }
];
