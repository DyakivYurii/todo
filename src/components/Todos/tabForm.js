import React from 'react';

import ChangeTask from './ChangeTask';
import CreateTask from './CreateTask';

class TabForm extends React.Component {
	constructor() {
		super();
		this.myRef = React.createRef();
	}

	handleClick = (refs) => (event) => {};

	render() {
		const {
			closeTab,
			changeTabState,
			tabFormState,
			userId,
			currentElement,
			clickedId,
			APIGetOne,
			APIUpdate,
			APIAdd,
			events,
			clearChosingElement
		} = this.props;
		return (
			<React.Fragment>
				<div ref={this.myRef} onClick={this.handleClick(this.myRef)}>
					{tabFormState === 'OPEN' ? (
						<div className="tab">
							{clickedId ? (
								<ChangeTask
									clearChosingElement={clearChosingElement}
									closeTab={closeTab}
									changeTabState={changeTabState}
									myRef={this.myRef}
									userId={userId}
									element={currentElement}
									taskId={clickedId}
									APIGetOne={APIGetOne}
									APIUpdate={APIUpdate}
								/>
							) : (
								<CreateTask
									closeTab={closeTab}
									userId={userId}
									APIAdd={APIAdd}
									events={events}
								/>
							)}
						</div>
					) : null}
				</div>
			</React.Fragment>
		);
	}
}

export default TabForm;
