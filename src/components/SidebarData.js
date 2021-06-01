import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {RiPencilFill} from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import {RiEmpathizeFill} from "react-icons/ri";
import {BsPersonBoundingBox} from "react-icons/bs";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
   

    
  },
  {
    title: 'Find Tutors',
    path: '/findtutors',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Academic Tutors',
        path: '/findtutors/academic_tutors',
        icon: <FaBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'sub-nav',
      },
      {
        title: 'Language Tutors',
        path: '/findtutors/language_tutors',
        icon: <FaBook />,
        cName: 'sub-nav'
      }
     
    ]
  },
  {
    title: 'Tutor Jobs',
    path: '/tutor_jobs',
    icon: <RiEmpathizeFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [

      {
        title: 'Become a Tutotrs',
        path: '/tutor_jobs/tutor',
        icon: <BsPersonBoundingBox />,
        cName: 'sub-nav'
      },
      {
        title: 'Tutor Jobs Dubai',
        path: '/tutor_jobs/dubai',
        icon: <BsPersonBoundingBox />,
        cName: 'sub-nav'
      },
     
      {
        title: 'Tutor Jobs Abu Dhabi',
        path: '/tutor_jobs/abu_dhabi',
        icon: <BsPersonBoundingBox />
      }
    ]
  },
  {
    title: 'Sign In',
    path: '/signin',
    icon: <RiPencilFill/>
  },
  {
    title: 'My Account',
    path: '/myaccount',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,

  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];