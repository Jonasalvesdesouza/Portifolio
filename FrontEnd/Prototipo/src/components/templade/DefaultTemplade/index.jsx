import { Footer, Header } from '../../fragments';

export const DefaultTemplate = ({ children, setIsOpen }) => {
  return (
    <div>
      <Header setIsOpen={setIsOpen} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
