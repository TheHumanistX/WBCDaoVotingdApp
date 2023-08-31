// Deployed Goerli: 0x43d5572Ce8BE4Df55d2385432992685E77Dcb16a
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Extension of the ERC721 token contract to support token wrapping.
 *
 * Users can deposit and withdraw an "underlying token" and receive a "wrapped token" with a matching tokenId. This is useful
 * in conjunction with other modules. For example, combining this wrapping mechanism with {ERC721Votes} will allow the
 * wrapping of an existing "basic" ERC721 into a governance token.
 *
 * _Available since v4.9.0_
 */
interface IWrappedCrazyFaces {

    /**
     * @dev Emitted when an account changes their delegate.
     */
    event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);

    /**
     * @dev Emitted when a token transfer or delegate change results in changes to a delegate's number of votes.
     */
    event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);


    //-------------------\\
    //----- SETTERS -----\\
    //-------------------\\

    /**
     * @dev Delegates votes from the sender to `delegatee`.
     */
    function delegate(address delegatee) external;

    /**
     * @dev Allow a user to deposit underlying tokens and mint the corresponding tokenIds.
     */
    function depositFor(address account, uint256[] memory tokenIds) external returns (bool);

    /**
     * @dev Allow a user to burn wrapped tokens and withdraw the corresponding tokenIds of the underlying tokens.
     */
    function withdrawTo(address account, uint256[] memory tokenIds) external returns (bool);

    /**
     * @dev Overrides {IERC721Receiver-onERC721Received} to allow minting on direct ERC721 transfers to
     * this contract.
     *
     * In case there's data attached, it validates that the operator is this contract, so only trusted data
     * is accepted from {depositFor}.
     *
     * WARNING: Doesn't work with unsafe transfers (eg. {IERC721-transferFrom}). Use {ERC721Wrapper-_recover}
     * for recovering in that scenario.
     */
    function onERC721Received(
        address,
        address from,
        uint256 tokenId,
        bytes memory
    ) external returns (bytes4);


    //-------------------\\
    //----- GETTERS -----\\
    //-------------------\\

    /**
     * @dev Returns the total amount of tokens stored by the contract.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.
     * Use along with {balanceOf} to enumerate all of ``owner``'s tokens.
     */
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);

    /**
     * @dev Returns a token ID at a given `index` of all the tokens stored by the contract.
     * Use along with {totalSupply} to enumerate all tokens.
     */
    function tokenByIndex(uint256 index) external view returns (uint256);

    /**
     * @dev Returns the current amount of votes that `account` has.
     */
    function getVotes(address account) external view returns (uint256);

    /**
     * @dev Returns the amount of votes that `account` had at the end of a past block (`blockNumber`).
     */
    function getPastVotes(address account, uint256 blockNumber) external view returns (uint256);

    /**
     * @dev Returns the total supply of votes available at the end of a past block (`blockNumber`).
     *
     * NOTE: This value is the sum of all available votes, which is not necessarily the sum of all delegated votes.
     * Votes that have not been delegated are still part of total supply, even though they would not participate in a
     * vote.
     */
    function getPastTotalSupply(uint256 blockNumber) external view returns (uint256);

    /**
     * @dev Returns the delegate that `account` has chosen.
     */
    function delegates(address account) external view returns (address);

    /**
     * @dev Returns the underlying token.
     * NOTE: The underlying token is the token deposited for the wrapped token.
     */
    function underlying() external view returns (address);

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);


}
