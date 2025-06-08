import {useState, useEffect, use} from 'react';
import {MedalTypes} from '../types/medals';

export function useMedals(){
    const [medals, setMedals] = useState<MedalTypes | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMedals = async () => {
            try {
                const response = await fetch('/data/medals.json');
                console.log('Medal Data:', response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: MedalTypes = await response.json();
                   console.log('Medal Data list:', data);
                setMedals(data);
            } catch (error) {
                console.error('Failed to fetch medals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMedals();
    }, []);
}