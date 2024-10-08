import styled from 'styled-components';
import { DogDisplayProps } from '../interfaces/DogDisplayInterface';

// Styled-component for the dog image
const DogImage = styled.img`
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;



// Component to display the dog image
export default function DogDisplay({ dogUrl }: DogDisplayProps) {
    return (
        <div>
            {dogUrl ? <DogImage src={dogUrl} alt="Try refresh the site!" /> : <p>No dog image available.</p>}
        </div>
    );
}
