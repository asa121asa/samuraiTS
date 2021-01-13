import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, newProfileType, setUsersProfile, updateStatus} from "../../redux/profile-reduser";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {userApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: newProfileType | null
    status: string
}
type mapDispathToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamType = {
    userId: string
}

export type ProfilePropsType = mapStateToPropsType & mapDispathToPropsType

type PropsType = RouteComponentProps<PathParamType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13055'
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)


    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<any>(connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>
(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withAuthRedirect, withRouter)(ProfileContainer)

/*

//функция compose заменяет этот код:
const  withRedirect = withAuthRedirect(ProfileContainer)

// для отображения на какой странице профиля находимся
let WithUrlDataContainerComponent= withRouter(withRedirect)

export default connect<mapStateToPropsType, mapDispathToPropsType,{}, appStateType>( mapStateToProps, {
    getUserProfile,
    //setUsersProfile
})(WithUrlDataContainerComponent)
*/
