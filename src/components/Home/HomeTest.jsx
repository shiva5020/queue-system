import React, { useState } from 'react';
import './HomeTest.css';

const NavigationItem = ({ item, onToggle }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const handleToggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
        onToggle && onToggle(item.label, !isSubMenuOpen);
    };

    return (
        <li className={`nav-item ${hasSubItems ? 'has-submenu' : ''}`}>
            <div onClick={handleToggleSubMenu} className="nav-label">
                {item.label}
            </div>
            {hasSubItems && isSubMenuOpen && (
                <ul className="submenu">
                    {item.subItems.map((subItem, index) => (
                        <NavigationItem key={index} item={subItem} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const MultiLevelNavigation = ({ data }) => {
    const [expandedItems, setExpandedItems] = useState([]);

    const handleToggle = (label, isOpen) => {
        const newExpandedItems = isOpen
            ? [...expandedItems, label]
            : expandedItems.filter((item) => item !== label);

        setExpandedItems(newExpandedItems);
    };

    return (
        <div className="nav-container">
            <ul className="nav-menu">
                {data.map((item, index) => (
                    <NavigationItem
                        key={index}
                        item={item}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    const navigationData = [
        {
            label: 'Home',
        },
        {
            label: 'Products',
            subItems: [
                {
                    label: 'Category 1',
                    subItems: [
                        { label: 'Subcategory A' },
                        { label: 'Subcategory B' },
                    ],
                },
                {
                    label: 'Category 2',
                    subItems: [
                        { label: 'Subcategory C' },
                        { label: 'Subcategory D' },
                    ],
                },
            ],
        },
        {
            label: 'About Us',
        },
    ];

    return (
        <div>
            {/* <h1>Multi-Level Navigation</h1> */}
            <MultiLevelNavigation data={navigationData} />
        </div>
    );
};


export default function HomeTest() {
    return (
        <div><App /></div>
    )
}
