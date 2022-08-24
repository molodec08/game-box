import {FC, Fragment, ReactNode} from "react"
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"

export const Tabs = ({tabs, sticky}) => {
  return (
    <ReactTabs className={classNames('react-tabs', sticky ? 'react-tabs--sticky' : null)}>
      <TabList>
        {tabs.map((el) => {

          const {txt, condition = true} = el

          return (
            <Fragment key={txt}>
              {condition ? <Tab>{txt}</Tab> : null}
            </Fragment>
          )
        })}
      </TabList>
      {tabs.map((el) => {

        const {txt, content, condition = true} = el;

        return (
          <Fragment key={txt}>
            {condition ? (
              <TabPanel>{content}</TabPanel>
            ) : null}
          </Fragment>
        )
      })}
    </ReactTabs>
  );
}