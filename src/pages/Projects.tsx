import React from 'react';
    import { motion } from 'framer-motion';
    import ProjectCard from '../components/Projects/ProjectCard';

    interface Project {
      title: string;
      description: string;
      image: string;
      tags: string[];
      demoUrl?: string;
      githubUrl?: string;
    }

    const projects: Project[] = [
      {
        title: 'High-Performance Semantic Segmentation of Skin Lesion Images',
        description: 'Implemented a U-Net deep learning model for skin lesion segmentation, achieving 95.4% validation accuracy on over 10,000 unique lesions.  Architected a tailored U-Net CNN using binary cross-entropy and Dice loss; optimized data augmentation strategies. Conducted hyperparameter tuning with metrics such as Dice coefficient (0.89), IoU (0.87), precision (94.2%), and recall (93.8%).',
        image: 'https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/265e345cf421052c318684dc24e3ac31c8d614ec/3-Figure2-1.png',
        tags: ['Python', 'TensorFlow', 'Keras', 'U-Net', 'Deep Learning', 'Image Segmentation'],
        demoUrl: 'https://example.com/skin-lesion-demo',
        githubUrl: 'https://github.com/example/skin-lesion'
      },
      {
        title: 'Real-Time Sign Language Detection Model',
        description: 'Developed a deep learning model for real-time sign language detection using CNN and LSTM networks in TensorFlow/Keras, achieving over 90% accuracy. Implemented advanced data visualizations with Matplotlib and MediaPipe to streamline reporting processes and accelerate project timelines.',
        image: 'https://th.bing.com/th/id/OIP.SF-wZ9qAm5_3kEEMoRX14QAAAA?rs=1&pid=ImgDetMain',
        tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'LSTM', 'Deep Learning', 'Sign Language Recognition'],
        demoUrl: 'https://example.com/sign-language-demo',
        githubUrl: 'https://github.com/example/sign-language'
      },
      {
        title: 'Innovative Autonomous Delivery System with AGVs',
        description: 'Spearheaded a pilot program for an autonomous delivery system using Automated Guided Vehicles (AGVs), resulting in a 30% reduction in delivery times. Redesigned collision avoidance strategies, ensuring safe daily shipments. Implemented path planning, object recognition, and location detection.',
        image: 'https://th.bing.com/th/id/OIP.HvYSiWXPw-9J6V6aN4MEigAAAA?rs=1&pid=ImgDetMain',
        tags: ['Python', 'Reinforcement Learning', 'Robotics', 'Autonomous Navigation', 'AGVs'],
        demoUrl: 'https://example.com/agv-demo',
        githubUrl: 'https://github.com/example/agv'
      },
      // Add more projects here...
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };

    export default function Projects() {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto py-12 px-4"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Projects</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      );
    }
