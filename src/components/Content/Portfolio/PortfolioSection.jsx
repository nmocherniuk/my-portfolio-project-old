import { Fragment } from 'react';
import CardItems from './CardItems.jsx';
import Container from '../../../UI/Container.jsx';

const PortfolioSection = () => {
    return (
        <Fragment>
            <section id='portfolio'>
                <Container>
                    <h2>Portfolio</h2>
                    <p className="description"> Here you will find some of the personal and clients projects that I created with each <br />
                        project containing its own case study.</p>
                    <CardItems/>
                </Container>
            </section>
        </Fragment>
    );
};

export default PortfolioSection;





