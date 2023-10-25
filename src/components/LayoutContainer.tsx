import React, { ReactNode } from 'react';
import '../styles/layout-container.css';

interface LayoutContainerProps {
    children: [ReactNode, ReactNode];
}

const LayoutContainer = ({ children } : LayoutContainerProps) => {
    const [header, body] = children;

    return (
        <div className="layout-container">
            <div className="layout-top">{header}</div>
            <div className="layout-content">{body}</div>
        </div>
    );
};

export default LayoutContainer;
