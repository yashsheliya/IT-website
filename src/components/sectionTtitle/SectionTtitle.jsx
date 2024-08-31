import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ 
  title, 
  subTitle, 
  titleTag: TitleTag = 'h3', 
  subTitleTag: SubTitleTag = 'h6', 
  textAlign = '', 
  subTitleColor = 'text-color-subtitle', 
  customClass = '' 
}) => {
  // Function to parse title with span and br
  const parseTitle = (title) => {
    // Create a temporary container to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = title;

    // Convert the content to React elements
    return Array.from(tempDiv.childNodes).map((node, index) => {
      if (node.nodeName === 'SPAN') {
        return (
          <span key={index} className={node.className}>
            {node.textContent}
          </span>
        );
      } else if (node.nodeName === 'BR') {
        return <br key={index} />;
      } else {
        return node.textContent;
      }
    });
  };

  return (
    <div className={`section-title-wrap ${textAlign} ${customClass}`}>
      <SubTitleTag className={`section-sub-title ${subTitleColor}`}>
        {subTitle}
      </SubTitleTag>
      <TitleTag className="heading">
        {parseTitle(title)}
      </TitleTag>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  titleTag: PropTypes.string,         // h1 to h6
  subTitleTag: PropTypes.string,      // h1 to h6
  textAlign: PropTypes.string,        // text alignment classes like 'text-center', 'text-left'
  subTitleColor: PropTypes.string,    // color class for the subtitle
  customClass: PropTypes.string       // any additional custom classes
};

export default SectionTitle;
