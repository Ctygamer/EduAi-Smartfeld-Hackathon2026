/**
 * -------------------------------------------------------------
 * Project: EduAI Marketplace
 * File: data.ts
 * Author: Caner Taha Yilmaz
 * Created: 14 Feb 2026
 * Description: Mock data configuration providing sample users,
 * materials, and messages for development and UI prototyping.
 * -------------------------------------------------------------
 */
import { Material, Message, User } from '@/types';

export const currentUser: User = {
    id: '1',
    name: 'Max Mustermann',
    email: 'max@schule.ch',
    school: 'Kantonsschule St. Gallen',
    canton: 'St. Gallen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
};

export const users: User[] = [
    currentUser,
    {
        id: '2',
        name: 'Prof. Elenor Maike',
        email: 'elenor@edu.ch',
        school: 'Gymnasium Zürich',
        canton: 'Zürich',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
        id: '3',
        name: 'Horst Lichter',
        email: 'horst@schule.ch',
        school: 'Realschule Basel',
        canton: 'Basel',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
        id: '4',
        name: 'Pia Erhart',
        email: 'pia@edu.ch',
        school: 'Berufsschule Bern',
        canton: 'Bern',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
];

export const materials: Material[] = [
    {
        id: '1',
        title: 'Interaktiver AI Lern Leitfaden für Mittelstüfler',
        shortDescription: 'Ich habe einen Lernleitfaden entwickelt, der Künstliche Intelligenz verständlich und praxisnah erklärt.',
        fullDescription: 'Ich habe einen Lernleitfaden entwickelt, der Künstliche Intelligenz verständlich und praxisnah erklärt. Mit interaktiven Aufgaben und klaren Beispielen unterstütze ich Schülerinnen und Schüler dabei, digitale Kompetenzen und kritisches Denken zu stärken.',
        author: users[1],
        tags: ['AI', 'Mittelstufe', 'Unterrichtsleitfaden'],
        createdAt: '2026-02-10',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
        likes: 24,
        comments: 8,
        isLiked: false,
        isBookmarked: false,
    },
    {
        id: '2',
        title: 'Wie bringe ich meinen Schülern richtig bei, zu lernen',
        shortDescription: 'In diesem Beitrag möchte ich euch näherbringen, wie man Schülern von allen Altersklassen beibringt sich richtig auf ihre Prüfungen vorzubereiten.',
        fullDescription: 'In diesem Beitrag möchte ich euch näherbringen, wie man Schülern von allen Altersklassen beibringt sich richtig auf ihre Prüfungen vorzubereiten. Mit bewährten Methoden und praktischen Tipps.',
        author: users[2],
        tags: ['Lernmethodik', 'Lernen', 'Blog'],
        createdAt: '2026-02-08',
        likes: 45,
        comments: 12,
        isLiked: true,
        isBookmarked: true,
    },
    {
        id: '3',
        title: 'Prüfung zum Thema Elektrik I',
        shortDescription: 'Die beigelegten Dateien enthalten die Unterlagen zu einer Prüfung über die Grundlagen der Elektrik.',
        fullDescription: 'Die beigelegten Dateien enthalten die Unterlagen zu einer Prüfung über die Grundlagen der Elektrik von dem Lehrmittel: "Grundlagen der Elektrotechnik" von Gert Hagman. Im Unterricht haben sich die Materialien als zuverlässige Unterstützung erwiesen, da sie sowohl zur Wiederholung als auch zur gezielten Prüfungsvorbereitung eingesetzt werden können.',
        author: users[3],
        tags: ['Prüfung', 'Grundlagen der Elektrotechnik', 'Gert Hagman'],
        createdAt: '2026-02-05',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
        likes: 18,
        comments: 5,
        isLiked: false,
        isBookmarked: false,
    },
    {
        id: '4',
        title: 'KI-gestütztes Quiz: Säure-Base-Reaktionen',
        shortDescription: 'Ein interaktives Quiz zum Thema pH-Wert und Säure-Base-Reaktionen für die Sekundarstufe II.',
        fullDescription: 'Ein interaktives Quiz zum Thema pH-Wert und Säure-Base-Reaktionen für die Sekundarstufe II. Mit adaptiven Fragen und sofortigem Feedback.',
        author: users[1],
        tags: ['Chemie', 'Quiz', 'Sek II'],
        createdAt: '2026-02-03',
        likes: 32,
        comments: 9,
        isLiked: false,
        isBookmarked: true,
    },
];

export const messages: Message[] = [
    {
        id: '1',
        sender: users[1],
        preview: 'Hallo Tim, wegen...',
        timestamp: '14:30',
        unreadCount: 2,
        isGroup: false,
    },
    {
        id: '2',
        sender: users[2],
        preview: 'Ja, dass wäre eine...',
        timestamp: '12:15',
        unreadCount: 0,
        isGroup: false,
    },
    {
        id: '3',
        sender: users[3],
        preview: 'Jörg: Steht der Termi...',
        timestamp: '09:45',
        unreadCount: 3,
        isGroup: true,
        groupName: 'Germanatics',
    },
    {
        id: '4',
        sender: users[3],
        preview: 'Markus: Info: Alle...',
        timestamp: 'Gestern',
        unreadCount: 1,
        isGroup: true,
        groupName: 'GBS Riethüsli',
    },
];
