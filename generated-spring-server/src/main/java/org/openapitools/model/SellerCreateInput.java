package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import org.openapitools.model.Address;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * SellerCreateInput
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class SellerCreateInput {

  private String storeName;

  private String email;

  private String phone;

  private Address address;

  private @Nullable BigDecimal rating;

  public SellerCreateInput() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public SellerCreateInput(String storeName, String email, String phone, Address address) {
    this.storeName = storeName;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  public SellerCreateInput storeName(String storeName) {
    this.storeName = storeName;
    return this;
  }

  /**
   * Get storeName
   * @return storeName
   */
  @NotNull 
  @Schema(name = "storeName", example = "Book World", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("storeName")
  public String getStoreName() {
    return storeName;
  }

  @JsonProperty("storeName")
  public void setStoreName(String storeName) {
    this.storeName = storeName;
  }

  public SellerCreateInput email(String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
   */
  @NotNull 
  @Schema(name = "email", example = "bookworld@example.com", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("email")
  public String getEmail() {
    return email;
  }

  @JsonProperty("email")
  public void setEmail(String email) {
    this.email = email;
  }

  public SellerCreateInput phone(String phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Get phone
   * @return phone
   */
  @NotNull 
  @Schema(name = "phone", example = "+212611111111", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("phone")
  public String getPhone() {
    return phone;
  }

  @JsonProperty("phone")
  public void setPhone(String phone) {
    this.phone = phone;
  }

  public SellerCreateInput address(Address address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
   */
  @NotNull @Valid 
  @Schema(name = "address", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("address")
  public Address getAddress() {
    return address;
  }

  @JsonProperty("address")
  public void setAddress(Address address) {
    this.address = address;
  }

  public SellerCreateInput rating(@Nullable BigDecimal rating) {
    this.rating = rating;
    return this;
  }

  /**
   * Get rating
   * @return rating
   */
  @Valid 
  @Schema(name = "rating", example = "4.3", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("rating")
  public @Nullable BigDecimal getRating() {
    return rating;
  }

  @JsonProperty("rating")
  public void setRating(@Nullable BigDecimal rating) {
    this.rating = rating;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SellerCreateInput sellerCreateInput = (SellerCreateInput) o;
    return Objects.equals(this.storeName, sellerCreateInput.storeName) &&
        Objects.equals(this.email, sellerCreateInput.email) &&
        Objects.equals(this.phone, sellerCreateInput.phone) &&
        Objects.equals(this.address, sellerCreateInput.address) &&
        Objects.equals(this.rating, sellerCreateInput.rating);
  }

  @Override
  public int hashCode() {
    return Objects.hash(storeName, email, phone, address, rating);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SellerCreateInput {\n");
    sb.append("    storeName: ").append(toIndentedString(storeName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    rating: ").append(toIndentedString(rating)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

