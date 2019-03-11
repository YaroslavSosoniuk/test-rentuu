export const mapJsonUsersDataAll = ({
                                        id,
                                        first_name,
                                        last_name,
                                        ip_address,
                                        gender,
                                        email
                                    }) =>
                                        ({
                                            id ,
                                            gender,
                                            email,
                                            name: first_name,
                                            lastName: last_name,
                                            ipAddress:ip_address
                                        } );
export const mapJsonUsersDataCut = ({
                                        id,
                                        first_name,
                                        last_name,
                                        ip_address
                                    }) =>
                                        ({
                                            id,
                                            name: first_name,
                                            lastName: last_name,
                                            ip: ip_address
                                        });
export const firstUsersFilter = ( users ) => {

    const usersToShow = users.length > 5 ?
        users.map( mapJsonUsersDataCut ).slice(0, 5)
        :
        users.map( mapJsonUsersDataCut).slice(0, users.length);
    return usersToShow

};
export const setNewUserData = ( users, { name, lastName, id } ) => {

    const newUsers = users.map( ( user, index ) => {

        return user.id === id
            ?
            {
                ...user,
                    name,
                    lastName,
                    id
            }
            :
            user

    } )
    return newUsers

}