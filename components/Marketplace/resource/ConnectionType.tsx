"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconRenderer from './IconRenderer';

interface ConnectionTypeProps {
    id: string;
}

interface ConnectionTypeData {
    icon?: string;
}


const ConnectionType: React.FC<ConnectionTypeProps> = ({ id }) => {
    const [connectionType, setConnectionType] = useState<ConnectionTypeData | null>(null);

    useEffect(() => {
        const fetchConnectionType = async () => {
            try {
                const response = await axios.get<{ connection_type: ConnectionTypeData }>(`https://api.altan.ai/integration/connection-type/${id}`);
                setConnectionType(response.data.connection_type);
            } catch (error) {
                console.error('Error fetching connection type:', error);
            }
        };

        fetchConnectionType();
    }, [id]);

    if (!connectionType) return null;

    return (
        <div className="p-2">
            <IconRenderer icon={connectionType.icon || "optimai"} />
        </div>
    );
};


export default ConnectionType;