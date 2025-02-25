'use client';
import { Trophy, Award, Medal } from 'lucide-react';
import { useState } from 'react';

interface ContestProps {
    className?: string;
}

interface Achievement {
    id: number;
    title: string;
    organization: string;
    date: string;
    description: string;
    certificateUrl?: string;
    image: string;
    category: 'contest' | 'hackathon' | 'certification';
    position?: string;
    skills?: string[];
}

const achievements: Achievement[] = [
    {
        id: 1,
        title: "Winner - National Coding Championship",
        organization: "TechFest 2024",
        date: "February 2024",
        description: "First place in the national coding competition, solving complex algorithmic challenges and implementing efficient solutions.",
        certificateUrl: "https://example.com/certificate1",
        image: "/certificates/coding-championship.png",
        category: "contest",
        position: "1st Place",
        skills: ["Algorithms", "Data Structures", "Problem Solving"]
    },
    {
        id: 2,
        title: "Best Innovation Award",
        organization: "Global Hackathon 2023",
        date: "November 2023",
        description: "Developed an AI-powered solution for sustainable energy management, winning the best innovation award.",
        certificateUrl: "https://example.com/certificate2",
        image: "/certificates/hackathon-award.png",
        category: "hackathon",
        position: "Winner",
        skills: ["AI/ML", "React", "Node.js", "MongoDB"]
    },
    // Add more achievements as needed
];

export default function Contest({ className = "" }: ContestProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

    const filteredAchievements = selectedCategory === 'all'
        ? achievements
        : achievements.filter(achievement => achievement.category === selectedCategory);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'contest':
                return <Trophy className="h-6 w-6" />;
            case 'hackathon':
                return <Award className="h-6 w-6" />;
            case 'certification':
                return <Medal className="h-6 w-6" />;
            default:
                return null;
        }
    };

    return (
        <article className={`contests ${className}`} data-page="contests">
            <header>
                <h2 className="h2 article-title">Achievements</h2>
            </header>

            <div className="category-filters">
                <button
                    className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'contest' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('contest')}
                >
                    Contests
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'hackathon' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('hackathon')}
                >
                    Hackathons
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'certification' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('certification')}
                >
                    Certifications
                </button>
            </div>

            <div className="achievements-grid">
                {filteredAchievements.map(achievement => (
                    <div
                        key={achievement.id}
                        className="achievement-card"
                        onClick={() => setSelectedAchievement(achievement)}
                    >
                        <div className="achievement-icon">
                            {getCategoryIcon(achievement.category)}
                        </div>
                        <div className="achievement-content">
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-org">{achievement.organization}</p>
                            <p className="achievement-date">{achievement.date}</p>
                            {achievement.position && (
                                <div className="achievement-position">
                                    <Trophy className="h-4 w-4" />
                                    <span>{achievement.position}</span>
                                </div>
                            )}
                        </div>
                        {achievement.certificateUrl && (
                            <a
                                href={achievement.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-certificate"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Achievement Modal */}
            {selectedAchievement && (
                <div
                    className="achievement-modal-overlay"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className="achievement-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedAchievement(null)}
                        >
                            ×
                        </button>
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-icon">
                                    {getCategoryIcon(selectedAchievement.category)}
                                </div>
                                <h2>{selectedAchievement.title}</h2>
                            </div>
                            <div className="modal-body">
                                <p className="modal-description">
                                    {selectedAchievement.description}
                                </p>
                                {selectedAchievement.skills && (
                                    <div className="skills-section">
                                        <h3>Skills Demonstrated</h3>
                                        <div className="skills-tags">
                                            {selectedAchievement.skills.map((skill, index) => (
                                                <span key={index} className="skill-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {selectedAchievement.certificateUrl && (
                                    <a
                                        href={selectedAchievement.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-link"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}