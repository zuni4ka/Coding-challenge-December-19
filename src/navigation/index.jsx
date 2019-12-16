import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';

const Navigation = ({
    nextId,
    nextTo,
    handleNextStep,
    backTo,
}) => {
    return (
        <div className={styles.navigation}>
            {backTo &&
                <Link
                    className={styles.back}
                    to="/"
                >
                    Back
                </Link>
            }
            {nextId &&
                <Link
                    className={styles.next}
                    id={nextId}
                    to={nextTo}
                    onClick={handleNextStep}
                >
                    Next
            </Link>
            }
        </div>
    );
};

export default Navigation;
